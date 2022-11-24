import {useRecoilState} from 'recoil'
import {ReactComponent as UpVector} from '../../assets/up_vector.svg'
import {ReactComponent as DownVector} from '../../assets/down_vector.svg'
import { gradeOpenState } from '../../states'

const ToggleVector=()=>{
    const [isOpen, setOpen]=useRecoilState(gradeOpenState)
    const handleClick=()=>{
        setOpen(!isOpen)
    }

    return(
        <div onClick={handleClick}>
            {isOpen?<UpVector/>:<DownVector/>}
        </div>
    )
}

export default ToggleVector