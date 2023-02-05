import Image from 'next/image'
import img from '../public/img/1.jpg'
function LionsPage() {
  return (
    <div>
      <Image src={img} placeholder="blur" alt="lion" width="680" height="220" />
      {['1', '2', '3', '4', '5'].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/img/${path}.jpg`}
              alt="pet"
              width="280"
              height="420"
            />
          </div>
        )
      })}
    </div>
  )
}

export default LionsPage
