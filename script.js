const testimonial  = [
    {
        name:"Aniket K",
        photoUrl:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww",
        text:"You can now explore vector illustration results. llorem5 sdhu busdhc buidsbehfbc svbu"
    },
    {
        name:"jhon K",
        photoUrl:"https://plus.unsplash.com/premium_photo-1664533227571-cb18551cac82?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        text:"You andiket is bad peron dont trust on."
    },
    {
        name:"kack",
        photoUrl:"https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        text:"You can now hhh usb sudcbdcds cudsbsdj c scshis scjbsd scuisbe sdvbsdvief csdd vuisdvbsufbs."
    }
];


let idx = 0;


const imgElements = document.querySelector("img")
const TextElemets = document.querySelector(".testimonial-text")
const UserNameElement = document.querySelector(".user-name")






UpdateTestimonial()



function UpdateTestimonial() {
    const{name , photoUrl , text} =testimonial[idx]

    imgElements.src = photoUrl
    TextElemets.innerText = text
    UserNameElement.innerText = name
    idx++
    setTimeout(() => {
        UpdateTestimonial()
    }, 3000);
}
