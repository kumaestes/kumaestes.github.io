const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
    image.setAttribute("src", image.getAttribute("date-src"));
    image.onload = () => {
        image.removeAttribute("data-src");
    };
};

const imgOptions = {
    rootMargin: "0px 0px 50px 0px",
    threshold: 0

};

if ("IntersectionObserver" in window) {
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imageOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });

}
else{
    imagesToLoad.forEach ((img)=> {
        loadImages(img);
});
}