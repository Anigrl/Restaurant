export default function conatactPage(){
    const content = document.querySelector("#content");
    content.innerHTML = 
    ` 
    <div class="contactForm">
        <h2>Contact Us</h2>
            <form action="" >
                <div>
                    <label for="name">Your Name: </label>
                    <input type="text" id="name" name="name" required >
                </div>

                <div>
                    <label for="email">Your Email: </label>
                    <input type="email" id="email" name="email" required>
                </div>

                <div>
                    <label for="phoneNumber">Contact No: </label>
                    <input type="number" id="phoneNumber" name="phoneNumber" required>

                </div>
                <div>
                <label for="message">Message:</label><br>
                <textarea id="message" name="message" rows="4" required></textarea><br>
                </div>
                <input type="submit">

            </form>
        </div>
    `;

    console.log('this is from contactapge')
}