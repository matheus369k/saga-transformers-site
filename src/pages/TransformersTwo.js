import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"

function TransformersTwo() {
    return (
        <div>
            <Container backGroundCustom="back_groud" backGroundImgCustom="backgound_img_2">
                <SwitchInfor  page={2} />
                <Redes />
            </Container>
        </div>
    )
}

export default TransformersTwo