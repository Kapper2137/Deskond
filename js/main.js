const footerYear = document.querySelector('.footer__year')



const handleCurrentYear = () => {
	// taki zapis aby footer sie aktualizowawl, jezeli chcemy ja wywolac to trzeba dodac otwarte nawiasy (na dole)
	const year = new Date().getFullYear()
	footerYear.innerText = year
	// inner text = year, bo year to nazwa zmiennej
}

handleCurrentYear()