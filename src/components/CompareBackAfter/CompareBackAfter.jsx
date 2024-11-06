import styleCompareBackAfter from "../CompareBackAfter/CompareBackAfter.module.css"
import compareJson from "../CompareBackAfter/Compare.json"
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function CompareBackAfter() {



  return (
    <section className={styleCompareBackAfter.CompareBackAfterSection} id ="descubra">


      {compareJson.map((item)=>(
        <div className = {styleCompareBackAfter.contentCompare} key ={item.id}>
        <div className = {styleCompareBackAfter.contentCompareInfo}>
          <h1>{item.titleCompare}</h1>
          
          <p><strong className={styleCompareBackAfter.strong}>{item.slCompare}</strong>{item.descCompare}</p>
        </div>
        <ReactCompareSlider className={styleCompareBackAfter.itemCompare}
          itemOne={<ReactCompareSliderImage src="" srcSet={item.img1Compare} alt="Image one" />}
          itemTwo={<ReactCompareSliderImage src="" srcSet={item.img2Compare} alt="Image two" />}
        />
        </div>
       
      ))}
   

    </section>
  )
}