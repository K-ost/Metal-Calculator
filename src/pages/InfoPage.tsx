import { useState } from "react"
import Header from "../components/Header"
import Spoiler from "../ui/Spoiler"

const InfoPage: React.FC = () => {
  const [index, setIndex] = useState<number>(0)

  return (
    <>
      <Header title="Справка" />
      <div className="app-calc">
        <div className="appbox">
          <p>Наш онлайн калькулятор предназначен для определения веса металлопроката с учетом его удельного веса. Пользователи могут выбрать тип металла, ввести размеры и количество материала. Калькулятор автоматически рассчитывает общий вес металла, предоставляя точные результаты для проектирования, строительства или других задач, связанных с металлоконструкциями.</p>
          <Spoiler title="Spoiler" index={1} current={index} handler={setIndex}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet consectetur officiis sed corrupti! Nam consequatur obcaecati qui dolorem perferendis vitae, animi dignissimos, sapiente aut sit fugiat ducimus odio voluptatibus asperiores!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet consectetur officiis sed corrupti! Nam consequatur obcaecati qui dolorem perferendis vitae, animi dignissimos, sapiente aut sit fugiat ducimus odio voluptatibus asperiores!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet consectetur officiis sed corrupti! Nam consequatur obcaecati qui dolorem perferendis vitae, animi dignissimos, sapiente aut sit fugiat ducimus odio voluptatibus asperiores!</p>
          </Spoiler>
          <Spoiler title="Spoiler" index={2} current={index} handler={setIndex}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet consectetur officiis sed corrupti! Nam consequatur obcaecati qui dolorem perferendis vitae, animi dignissimos, sapiente aut sit fugiat ducimus odio voluptatibus asperiores!</p>
          </Spoiler>
          <Spoiler title="Spoiler" index={3} current={index} handler={setIndex}>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet consectetur officiis sed corrupti! Nam consequatur obcaecati qui dolorem perferendis vitae, animi dignissimos, sapiente aut sit fugiat ducimus odio voluptatibus asperiores!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet consectetur officiis sed corrupti! Nam consequatur obcaecati qui dolorem perferendis vitae, animi dignissimos, sapiente aut sit fugiat ducimus odio voluptatibus asperiores!</p>
          </Spoiler>
          <p>Удобство использования делает его полезным инструментом в инженерной практике и строительной сфере. Онлайн калькулятор сможет рассчитать вес металлопроката для различных типов металлов, включая, но не ограничиваясь такие как:</p>
          <ul>
            <li>Черные металлы,  железо и сталь</li>
            <li>Нелегированные и легированные сплавы алюминия</li>
            <li>Нержавеющая сталь</li>
            <li>Медь и его сплавы</li>
            <li>Олово</li>
            <li>Титан и титановые сплавы</li>
          </ul>
          <p><em>Этот список не исчерпывающий, и калькулятор может поддерживать дополнительные типы металлов в зависимости от его функциональности и обновлений.</em></p>
          <p>Кроме того, калькулятор не только рассчитывает вес металлопроката, но также предоставляет возможность определения площади поверхности в квадратных метрах. Это особенно удобно при работе с листами, профильными трубами и другими изделиями.</p>
        </div>
      </div>
    </>
  )
}

export default InfoPage
