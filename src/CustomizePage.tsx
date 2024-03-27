import './CustomizePage.css';

function CustomizePage() {
  return (
    <div className="customizePage">
      <header className="header">
        <h1>Customize Your Gaming PC</h1>
        <p>Welcome to our PC builder wizard. Let's start customizing.</p>
      </header>
      <div className="mainContent">
        <div className="categories">
          {/* Example category */}
          <div className="category">
            <h2>CPU</h2>
            <div className="options">
              <label><input type="checkbox" name="cpu" value="Intel" /> Intel</label>
              <label><input type="checkbox" name="cpu" value="AMD" /> AMD</label>
            </div>
          </div>
          
          {/* Repeat for other categories */}
        </div>
        <div className="previewArea">
          <h2>Preview Your Build</h2>
          {/* Dynamic content based on selections */}
        </div>
      </div>
      <footer className="summary">
        <p>Total Price: $XXX</p>
        <button>Proceed to Checkout</button>
      </footer>
    </div>
  );
}

export default CustomizePage;
