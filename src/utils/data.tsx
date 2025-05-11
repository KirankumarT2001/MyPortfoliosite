interface SkillT {
    image:string,
    title:string
}

const skill_value:SkillT[] = [

    
    {
        image:"java.svg",
        title:"Java"
    },

    {
        image:"sp.svg",
        title:"Spring Boot"
    },
    {
        image:"react.svg",
        title:"React.Js"
    },
    
    {
        image:"html.svg",
        title:"HTML"
    },
    {
        image:"css.svg",
        title:"CSS"
    },
    
    {
        image:"github.svg",
        title:"GitHub"
    },
    {
        image:"hibernate.svg",
        title:"Hibernate"
    },
    {
        image:"mysql.svg",
        title:"MySQL"
    },
    {
        image:"js.svg",
        title:"JavaScript"
    },
   
]

interface project {
    title:string,
    details:string,
    image:string,
    made:string[],
    github:string,
}

const project_list:project[] = [
    {
        title:"AgroChian",
        details:"AgroChain is a farmer-to-customer supply management system ensuring transparency, fair pricing, and fraud prevention through Ethereum blockchain. Customers buy directly from farmers and track product and quality in real-time. It empowers farmers, boosts profitability, and delivers fresh authentic produce to consumers.",
        image:"next.svg",
        made:["react.svg","js.svg","eth.png","meta.png","tail.png"],
        github:"https://github.com/devendra-official/Rust-server.git"
    },
    {
        title:"Portfolio",
        details:"This is my portfolio website, built using React.js and Tailwind CSS. It showcases my skills, projects, and contact information. The design is responsive and user-friendly, ensuring a seamless experience across devices.",
        image:"next.svg",
        made:["next.svg","js.svg","tail.png"],
        github:"https://github.com/devendra-official/Rust-server.git"
    }
    
]

export{ skill_value,project_list };