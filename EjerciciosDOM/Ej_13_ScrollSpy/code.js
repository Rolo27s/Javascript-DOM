// El API para resolver este ejercicio es intersection observer. Necesita referencias (data-scroll-spy).

function scrollSpy() {
    const $sections = document.querySelectorAll("section[data-scroll-spy]");

    const cb = (entries) => {
        // console.log("entries: ", entries);

        entries.forEach(entry => {
            // console.log("entry: ", entry);

            const id = entry.target.getAttribute("id");
            // console.log(id);

            if (entry.isIntersecting) {
                document.querySelector(`li[data-scroll-spy].${id}`).classList.add("active");
            } else {
                document.querySelector(`li[data-scroll-spy].${id}`).classList.remove("active");    
            }
        });
    };

    const observer = new IntersectionObserver(cb, {
        //root
        //rootMargin: "-250px",
        threshold: [0.5, 0.75],
    });
    // console.log("observer: ", observer);

    $sections.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", scrollSpy);