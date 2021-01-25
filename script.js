// console.clear()

ScrollOut({
  threshold: 0,
  cssProps: {
    intersectY: true,
    visibleY: true,
    viewportY: true,
  }
});

const headings = document.querySelectorAll('.heading');

headings.forEach(heading => {
  heading.setAttribute('data-scroll', '');
  ScrollOut({
    onShown: function(heading) {
      // Remove the class
      heading.classList.remove("falldown");
  
      // Force reflow
      void heading.offsetWidth;
  
      // Re-Add the animated classes
      heading.classList.add("falldown");
    }
  });
});

Splitting({
  target: '.heading',
  by: 'words'
});