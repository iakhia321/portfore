const Contacts = () => {
    return (  
           <main className="section">
    <div className="container">
            <h1 className="title-1">Contacts</h1>

            <ul className="content-list">
                <li className="content-list__item">
                    <h2 className="title-2">даю знать где я нахожусь</h2>
                    <p>Turkey, Antalia</p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Telegram / WhatsApp</h2>
                    <p><a href="tel:+79051234567">+7 (938) 000 60-95 </a></p>
                </li>
                <li className="content-list__item">
                    <h2 className="title-2">Email</h2>
                    <p><a href="mailto:webdev@protonmail.com">hakievaha@gmail.com</a></p>
                </li>
            </ul>

    </div>
</main> 
);
}
 
export default Contacts;