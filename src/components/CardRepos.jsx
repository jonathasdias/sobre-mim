import { FaGithub } from "react-icons/fa";
import { MdOutlineWeb } from "react-icons/md";
import Cep from '../imgs/reposImgs/cep.png';
import Gallery from '../imgs/reposImgs/gallery.png';
import Playmusic from '../imgs/reposImgs/playmusic.png';
import Loginsignup from '../imgs/reposImgs/loginsignup.png';
import Paralax from '../imgs/reposImgs/paralax.png';
import Previsaotempo from '../imgs/reposImgs/previsaotempo.png';
import Noticias from '../imgs/reposImgs/noticias.png';
import Ecommerce from '../imgs/reposImgs/ecommerce.png';
import Todolist from '../imgs/reposImgs/todolist.png';

const imgs = [Cep, Gallery, Playmusic, Loginsignup, Paralax, Previsaotempo, Noticias, Ecommerce, Todolist];

export default function CardRepos({reposList}) {
    return(
        <>
            {reposList.map((repos, index)=> (
                <article key={repos.id} className="bg-slate-950 rounded-lg overflow-hidden flex flex-col justify-between hover:shadow-md hover:shadow-slate-300 transition-all duration-500">
                    <figure className="w-full">
                        <img src={imgs[index]} alt={"Prévia do Site " + repos.name} />
                    </figure>

                    <span className=" text-lg md:text-xl px-2 py-1 capitalize">{repos.name}</span>
                    <p className="px-2 text-sm md:text-base text-justify">{repos.description}</p>

                    <div className="flex bg-slate-800 mt-2 text-center">
                        <a href={repos.html_url} target="_blank" className="flex justify-center items-center gap-2 w-2/4 rounded-bl-lg  p-2 hover:bg-gray-300 hover:text-slate-900 transition-all duration-500"><span className="hidden sm:block sm:font-bold">Ver Código</span> <FaGithub className="text-xl"/></a>
                        <a href={repos.homepage} target="_blank" className="flex justify-center items-center gap-2 border-l-2 w-2/4 rounded-br-lg p-2 hover:bg-gray-300 hover:text-slate-900 transition-all duration-500"><span className="hidden sm:block sm:font-bold">Ver Site</span> <MdOutlineWeb className="text-xl"/></a>
                    </div>
                </article>
            ))}
        </>
    )
}