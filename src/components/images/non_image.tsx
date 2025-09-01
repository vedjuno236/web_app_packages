import Appbar from "../appbar/appbar"
import ImageTrail from "./image"
import SplashCursor from "./splash"

const Nonimage = () => {
    return (
        <div>
            <Appbar />
            <div className="h-100 relative overflow-hidden">
                <ImageTrail

                    items={[
                        'https://picsum.photos/id/287/300/300',
                        'https://picsum.photos/id/1001/300/300',
                        'https://picsum.photos/id/1025/300/300',
                        'https://picsum.photos/id/1026/300/300',
                        'https://picsum.photos/id/1027/300/300',
                        'https://picsum.photos/id/1028/300/300',
                        'https://picsum.photos/id/1029/300/300',
                        'https://picsum.photos/id/1030/300/300',
                    ]}
                    variant={3}
                />


            </div>
            <SplashCursor />
        </div>

    )
}

export default Nonimage
