import Container from "../components/Container"
import Redes from "../components/layout/Redes"
import SwitchInfor from "../components/layout/SwitchInfor"


function TransformersOne() {
    return (
        <div>
           <Container backGroundCustom="back_groud" backGroundImgCustom="backgound_img_1">
                <SwitchInfor page={1} linkTrailer="https://www.youtube.com/embed/v8ItGrI-Ou0?si=tAK6sRRT_T0gPaZ0" />
                <Redes />
            </Container>
        </div>

    )
}

export default TransformersOne
