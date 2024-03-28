function CustomizePage() {
  return (
    <div className="font-sans text-white bg-gray-900 p-5">
      <header>
        <h1>Customize Your Gaming PC</h1>
        <p>Welcome to our PC builder wizard. Let's start customizing.</p>
      </header>
      <div className="flex justify-center">
        <div className="flex-1 m-2.5 p-5 bg-gray-800 rounded-md">
          {/* Example category */}
          <div>
            <h2 className='text-[#4CAF50]'>CPU</h2>
            <div className="flex flex-col">
              <label><input type="checkbox" name="cpu" value="Intel" /> Intel</label>
              <label><input type="checkbox" name="cpu" value="AMD" /> AMD</label>
            </div>
          </div>
          
          
          {/* Repeat for other categories */}
        </div>
        <div className="flex-1 m-2.5 p-5 bg-gray-800 rounded-lg">
          <h2>Preview Your Build</h2>
          {/* Dynamic content based on selections */}
        </div>
      </div>
      <footer className="text-center mt-5">
        <p>Total Price: $XXX</p>
        <button>Proceed to Checkout</button>
      </footer>
    </div>
  );
}

export default CustomizePage;
