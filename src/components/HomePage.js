import {Carousel, CarouselItem} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

function HomePage(props){
    return(
        <Container fluid>
        <Carousel>
            <CarouselItem>
                <h2 class='text-bg-secondary p-3'>Choose health</h2>
                <img src={require('../images/mealprep1.jpg')} alt="meal package 1"/>
                <p class='text-bg-secondary p-3'>
                    Our nutricionists have prepared a variety of menus to suit any goals you might have. What they all have in common - they are all healthy
                </p>  
            </CarouselItem>
            <CarouselItem>
            <h2 class='text-bg-secondary p-3'>Number 1 mealprep service</h2>
                <img src={require('../images/mealprep2.jpg')}  alt="meal package 2"/>
                <p class='text-bg-secondary p-3' >
                    Whole 4 fake customers rated us the best mealprep service in Israel! We are striving to continue making our clients happy, delivering the top quality meals to your door!
                </p>
            </CarouselItem>
            <CarouselItem>
                <h2 class='text-bg-secondary p-3'>Contact us!</h2>
                <img src={require('../images/mealprep3.png')} alt="meal package 3"/>
                <p class='text-bg-secondary p-3'>
                    Have any questions? Do not hesitate to contact us at fakeCustomerService@gmail.com
                </p>    
            </CarouselItem>
        </Carousel>
    </Container>
    )
}
export default HomePage;