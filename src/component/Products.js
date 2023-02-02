import Title from './reusable/Title';
import Btn from './reusable/Btn';
import ProdSwiper from './ProdSwiper';

const Products = (props) => {
  return (
    <section id='others' className='sectionSpace'>
      <Title type={props.data && props.data[props.sort]}></Title>
      <ProdSwiper type={props.slide && props.slide[props.swipe]} />
      <div className='d-flex justify-content-center align-itmes-center py-5'>
        <Btn type={props.data && props.data[props.sort]}></Btn>
      </div>
    </section>
  )
}

export default Products;