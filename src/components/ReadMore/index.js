// Write your code here
import { useState } from "react";

import {
    MainContainer,
    MainHeading,
    MainParagraph,
    ReactImage,
    Text,
    Button,
} from "./styledComponents";

const ReadMore=({reactHooksDescription})=>{
    const [isExpand,setIsExpand]=useState(false)
    const [textContent, setTextContent] = useState(reactHooksDescription.slice(0, 171));

    const onClickToggle=()=>{
        setIsExpand(prevState=>(!isExpand))
        if (!isExpand) {
            setTextContent(reactHooksDescription);
        }else {
            setTextContent(reactHooksDescription.slice(0, 170));
        }
        
    }


    return(
        <MainContainer>
            <MainHeading>React Hooks</MainHeading>
            <MainParagraph>Hooks are a new addition to React</MainParagraph>
            <ReactImage
                src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
                alt="react hooks"
            />
            <Text>{textContent}</Text>
            <Button onClick={onClickToggle}>
                {isExpand? "Read Less":"Read More"}
            </Button>
        </MainContainer>

    )
}
export default ReadMore
