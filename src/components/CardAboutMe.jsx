export default function CardAboutMe({data}) {
    return(
        <article className="p-2 flex flex-col md:flex-row">
          <figure className="w-full m-auto md:w-[66rem] border-4">
            <a href={data.html_url} target="_blank">
              <img src={data.avatar_url} alt="Imagem de jonathas dias" className="w-full h-full"/>
            </a>
          </figure>

          <div className="text-justify md:ml-2 text-lg">
            <p className="p-1 indent-8">Olá, eu sou <b>{data.name}</b>, moro em {data.location}, atualmente faço faculdade de Análise e desenvolvimento de sistemas e sou apaixonado pela programação front-end web. Como um eterno estudante, estou sempre aprimorando meus conhecimentos no desenvolvimento de sites e aplicações web interativas, responsivas, atraentes, com um bom seo, boa acessibilidade, dinâmicas e eficientes. Estou sempre disposto a aprender e aprimorar minhas habilidades.</p>
            <p className="p-1">
              <b>Minhas tecnologias como desenvolvedor front-end web:</b> HTML, CSS, JAVASCRIPT, TAILWINDCSS e REACT.
            </p>
          </div>
        </article>
    )
}