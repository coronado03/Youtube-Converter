import { useState } from "react"
import { BsDownload } from "react-icons/bs";
import Toaster from "@/components/toaster"

export default function Converter() {

    const [url, setUrl] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [isHovering, setIsHovered] = useState<boolean>(false);
    const [valid, setValid] = useState<boolean>(false);

    
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    
    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const link = event.target.value
        const myregexp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const result = link.match(myregexp)
        if (result && result[2] != null){
          setValid(true);
          setUrl(result[2]); // The [2] is to get the second string from the array result creates (Don't get confused!!)
        }
        else {
          setValid(false);
          setUrl('na');
        }
          

    }

    const handleUrlClick = async (event: React.FormEvent) => {
      event.preventDefault();
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '8b043c5416msh840099695e0a4a3p12e1e6jsne8d647794687',
          'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
        }
      };
      
      if (valid) {
        fetch(`https://youtube-mp36.p.rapidapi.com/dl?id=${url}`, options)
        .then(response => response.json())
        .then(response => setLink(response.link))
        .then(() => {
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = link;
          a.download = 'file.mp3';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        })
        .catch(err => console.error(err));
      }


    }

    return (
        <main className="mt-40 text-white h-full items-center"> 
        <Toaster popup={valid}/>
              
        <h1 className="text-center text-4xl">Youtube MP3 Converter</h1>
        <form className="flex flex-col mt-12 w-screen justify-center" onSubmit={handleUrlClick}>
            <div className="flex flex-row gap-x-4 justify-center">
              <input className="border text-black border-black rounded-lg hover:outline hover:outline-4 transition-all	ease-in" placeholder="INSERT URL" onChange={handleUrlChange}/>
              <button className="flex flex-row items-center gap-x-2 bg-white rounded-md text-[#CD0404] py-3 px-2 outline-black hover:outline hover:outline-4 transition-all	ease-in" 
              type="submit" 
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}>
                {isHovering ? (
                <>Convert <BsDownload/></>
              ): (
                <>Convert</>
              )}
              </button>
            </div>

              {valid ? (
                <p></p>
                
              ): (
                <p className="text-center text-xs mr-64">Type a valid url</p>
              )}
        </form>
        </main>
    )
  }