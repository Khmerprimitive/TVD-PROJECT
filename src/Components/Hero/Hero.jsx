import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className="hero-text">
            <h1>ចង់ជោគជ័យខំប្រឹងធ្វើការ កុំជឿការឃោសនាគ្រូជោគជ័យ</h1>
            <p>ខ្នងជាប់តែជាមួយនឹងគ្រែ បែរជាត្អូញត្អែរថាខ្លួនបរាជ័យ។ ត្រូវចាប់ផ្ដើមឥឡូវនេះ កុំចាំស្អែក បើអ្នកចង់រីកចម្រើន។</p>
            <p>បោះបង់ភាពខ្ចិលច្រអូស រៀនកែទំលាប់អាក្រក់ បោះបង់ចោលគំនិតអវិជ្ជមាន រៀនគិតរៀនធ្វើអ្វីដែលជាប្រយោជន៍ ហើយកុំប៉ះពាល់ដល់អ្នកដទៃ​ ប្រយ័ត្នក្បាលមួយដុំដី។</p>
            <button className='btn'>ស្វែងយល់បន្ថែមទៀត <img src={dark_arrow} alt=""/></button>
        </div>
    </div>
  )
}

export default Hero