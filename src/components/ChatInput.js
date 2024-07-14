import Image from "next/image";

const ChatInput = () => {
  
    return (
      <footer className=" mb-1 px-2 flex bg-transparent items-center fixed bottom-0 w-screen md:w-96 ">
       <div className="relative flex items-center border-0 rounded w-full p-0 mr-2 bg-transparent">
      <div className="absolute left-3 cursor-pointer pl-1" >
        <Image
          src="/assets/emojis.png" 
          alt="Upload"
          width={23}
          height={20}
        />
      </div>
      <input
        type="text"
        className="pl-11 pr-10 py-2 border-none font-bold w-full focus:outline-none bg-slate-700 rounded-full "
        placeholder="Message"
      />
      <div className="absolute right-12 cursor-pointer" >
        <Image
          src="/assets/file.png" 
          alt="Send"
          width={27}
          height={20}
        />
      </div>
      <div className="absolute right-5 cursor-pointer" >
        <Image
          src="/assets/camera.png" 
          alt="Send"
          width={22}
          height={20}
        />
      </div>
    </div>
        <button className="bg-green-600 text-sm h-10 w-11 rounded-full justify-center flex items-center align-center">
        <Image src={"/assets/mic.png"} width={23} height={23} alt=""/>
        </button>
      </footer>
    );
  };
  
  export default ChatInput; 
  