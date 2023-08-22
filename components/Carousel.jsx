
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from "../styles/carrocel.module.css"
import { BsFillStarFill } from "react-icons/bs";

export default function Carousel() {
  const settings = {
    className: "center",
      infinite: true,
      centerMode: true,
      centerPadding: "60px",
      slidesToShow: 3.2,
      swipeToSlide: true,
      arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.6,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 290,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  };


  const avaliecoes = [
    {nome: "Pedro Oliveira", descicao: "Fiquei impressionado com a qualidade dos presets e packs de edição que comprei nesta loja. Eles realmente transformaram minhas fotos e me ajudaram a alcançar o visual que eu estava procurando. Altamente recomendado!", img: "avaliacao1.jpg"},
    {nome: "Laura Rodrigues", descicao: "Esses presets são incríveis! Eles me economizaram horas de trabalho tedioso de edição e deram às minhas fotos um visual profissional. Estou extremamente satisfeito com minha compra.", img: "avaliacao2.jpg"},
    {nome: "Gabriela Santos", descicao: "Eu não posso acreditar na diferença que esses presets fizeram nas minhas fotos. Eles adicionaram profundidade, cor e uma atmosfera incrível. Com certeza vou voltar para comprar mais!", img: "avaliacao3.jpg"},
    {nome: "João Ferreira", descicao: "A loja oferece uma variedade incrível de presets e packs de edição. Há opções para todos os estilos e gostos. Eu amo como eles são fáceis de usar e o resultado final é simplesmente impressionante.", img: "avaliacao4.jpg"},
    {nome: "André Castro", descicao: "Como um fotógrafo profissional, estou sempre em busca de ferramentas que me ajudem a aprimorar meu trabalho. Os presets e packs de edição desta loja são definitivamente uma dessas ferramentas. Eles elevaram o nível das minhas fotos e impressionaram meus clientes.", img: "avaliacao5.jpg"},
    {nome: "Felipe Rocha", descicao: "Eu comprei os presets e packs de edição desta loja e estou extremamente feliz com minha compra. Eles são versáteis e se adaptam facilmente a diferentes tipos de fotografia. Recomendo a todos os fotógrafos em busca de uma solução eficiente para edição de imagens.", img: "avaliacao6.jpg"},
    {nome: "Sophia Smith", descicao: "Os presets e packs de edição desta loja são verdadeiros salvadores! Eles me permitem alcançar o estilo desejado de maneira rápida e eficiente. Definitivamente recomendo a todos os fotógrafos que desejam melhorar sua pós-produção.", img: "avaliacao7.jpg"}
  ]


  return (
    <div className={styles.carousel_wrapper}>
      <Slider {...settings}>
        {
          avaliecoes.map((obj) => (

          <div className={styles.container_card}>
            <div className={styles.slide}  style={{backgroundImage: `url(/${obj.img})`}}>
              <h3>{obj.nome}</h3>
            <div className={styles.description}>
              <span><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /><BsFillStarFill /></span>
            <p>{obj.descicao}</p>
              </div>
            </div>
          </div>
          ))
        }

      </Slider>
    </div>
  );
}