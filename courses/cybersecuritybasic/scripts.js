document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const chapters = document.querySelectorAll('.chapter-content');
    let currentChapterIndex = 0;

    function showChapter(index) {
        chapters.forEach(chapter => chapter.classList.remove('active'));
        chapters[index].classList.add('active');

        menuItems.forEach(item => item.classList.remove('active'));
        menuItems[index].classList.add('active');
    }

    menuItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentChapterIndex = index;
            showChapter(index);
        });
    });

    document.getElementById('next-btn').addEventListener('click', () => {
        if (currentChapterIndex < chapters.length - 1) {
            currentChapterIndex++;
            showChapter(currentChapterIndex);
        }
    });

    document.getElementById('prev-btn').addEventListener('click', () => {
        if (currentChapterIndex > 0) {
            currentChapterIndex--;
            showChapter(currentChapterIndex);
        }
    });

    // Initialize with the first chapter active
    showChapter(currentChapterIndex);
});
