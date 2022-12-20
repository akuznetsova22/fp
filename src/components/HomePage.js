
import {Carousel, CarouselItem} from "react-bootstrap";
import Container from 'react-bootstrap/Container';


function HomePage(props){
    return(
        <Container fluid>
        <Carousel>
            <CarouselItem>
                <h2 class='text-bg-secondary p-3'>Choose health</h2>
                <img src={require('../images/mealprep1.jpg')} alt="meal package 1"/>
                <p class='text-bg-secondary p-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto possimus culpa accusantium consequuntur nobis sequi voluptatibus repellat deleniti quas non blanditiis, id delectus ipsum necessitatibus, nam, eius molestias perspiciatis consequatur.</p>  
            </CarouselItem>
            <CarouselItem>
            <h2 class='text-bg-secondary p-3'>Number 1 mealprep service</h2>
                <img src={require('../images/mealprep2.jpg')}  alt="meal package 2"/>
                <p class='text-bg-secondary p-3' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores fugiat tenetur dolor odio nesciunt quidem maxime accusantium optio quo temporibus, dignissimos facere animi error, aut vel possimus ipsa asperiores! Debitis.</p>
            </CarouselItem>
            <CarouselItem>
                <h2 class='text-bg-secondary p-3'>Contact us!</h2>
                <img src={require('../images/mealprep3.png')} alt="meal package 3"/>
                <p class='text-bg-secondary p-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto ut, fugit tempora, ducimus hic accusantium inventore blanditiis provident odit eius numquam, quam dolor. Voluptas modi facere doloremque eius ipsa! Ut.</p>    
            </CarouselItem>
        </Carousel>
    </Container>
    )
}
export default HomePage;