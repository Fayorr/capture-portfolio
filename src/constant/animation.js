export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    }, show: {
        opacity: 1,
        y: 0, 
        transition: {
            duration: 0.75,
            when: "beforeChildren", //Until the parent loads finish others won't.
            staggerChildren: 0.25,  //to make each childrean wait for one another.
            
        }
    }, exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 0.5,
        }
    }
}

export const titleAnim = {
    hidden: {
     y: 200
    },
    show: {
       y: 0,
       transition: {duration: 0.75, ease: "easeOut"} 
    }
}
export const fade = {
    hidden: {
    opacity: 0,
    },
    show: {
       opacity: 1,
       transition: {
        duration: 0.75, 
        ease: "easeOut" } 
    }
}
export const photoAnim = {
    hidden: {opacity: 0, scale: 1.5},
    show: {scale: 1, opacity: 1, transition: {duration: 1, ease: "easeOut"}}
}