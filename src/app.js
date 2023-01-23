class Blog {
  constructor(title, detail) {
    this.title = title;
    this.detail = detail;
  }
  addTitle() {
    var title_card = document.createElement('h1');
    title_card.setAttribute('id', 'blog-title');
    document.getElementById('card-text').appendChild(title_card);
    title_card.innerHTML += this.title;
  }

  addDescription() {
    var description = document.createElement('p');
    description.setAttribute('id', 'blog-description');
    document.getElementById('card-text').appendChild(description);
    description.innerHTML += this.detail;
  }
  // Progression 1: Add 2 methods - addTitle(), and addDescription()
}

// Progression 2: Setup an event listner - add two functions
// 1. `helperAddPost()`
// 2. `helperPost()`

function helperAddPost() {
  document.getElementById('popupContact').style.display = 'inline';
}

function helperPost() {
  let title = document.getElementById('title').value;
  let description = document.getElementById('detail').value;

  blog = new Blog(title, description);
  blog.addTitle();
  blog.addDescription();

  document.getElementById('popupContact').style.display = 'none';
}
