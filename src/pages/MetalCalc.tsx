import React, { useState } from "react"
import Shape, { ShapeList } from "../components/Shape"
import { shapesList } from "../helpers"
import Btn from "../ui/Btn"
import Screen from "../components/Screen"
import { ShapeType, materialsObjType } from "../types"
import Materials from "../components/Materials"
import { useResultStore } from "../store/resultStore"
import { useForm } from "react-hook-form"
import Footer from "../components/Footer"
import Results from "../components/results/Results"
import Header from "../components/Header"
import MetalResults from "../components/results/MetalResults"


const MetalCalc: React.FC = () => {
  const [materials, setMaterials] = useState<materialsObjType | null>(null)
  const [shape, setShape] = useState<ShapeType>(shapesList[0])
  const { setResult, results, removeAllResults } = useResultStore()

  // Form
  const { handleSubmit, register, reset, formState: { errors } } = useForm()


  // chooseShape
  const chooseShape = (val: ShapeType): void => {
    setShape(val)
    reset()
  }


  // calcHandler
  const calcHandler = (data: any) => {
    setResult({
      materials,
      shapeName: shape.title,
      shapeValue: shape.value,
      sizes: data
    })
  }
  

  return (
    <>
      <Header title="Калькулятор металлов" />
      <div className="app-calc app-metal">
        <Materials setMaterials={setMaterials} />
        
        <form onSubmit={handleSubmit(calcHandler)} noValidate className="grid grid-2 grid-tb-1">
          <ShapeList className="appbox">
            {shapesList.map(el => <Shape key={el.id} handler={chooseShape} current={shape.value} el={el} />)}
          </ShapeList>
          
          <Screen shape={shape} register={register} errors={errors} />

          <Footer>
            <Btn title="Посчитать" type="submit" handler={() => {}} />
          </Footer>
        </form>
      </div>
      
      <Results
        length={results.length}
        names={['Форма', 'Материал / Марка', 'Размеры', 'Вес, кг', 'Площадь, м²', 'Цена']}
        removeAll={removeAllResults}
      >
        <MetalResults list={results} />
      </Results>
    </>
  )
}

export default MetalCalc
