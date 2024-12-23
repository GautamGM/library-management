# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
create-vite ---
tailwind css---
react-router-dom-----
reuxtoolkit----
sonner---
mui----



{
  "books": [
    {
      "id": 1,
      "Title": "To Kill a Mockingbird",
      "image": "https://imgs.search.brave.com/KPDnCyDpDmG3o_p7A2mO9ALmG9daep88HhiPfkeloy4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvdG8ta2lsbC1h/LW1vY2tpbmdiaXJk/LXBpY3R1cmVzLXEx/cXEyZGFhZGg2d2x2/d2YuanBn",
      "Author": "Harper Lee",
      "Genre": "Fiction",
      "Publication_Year": 1960,
      "Rating": "4.8",
      "Downloads": 1000000,
      "About_Book": "A story about the life of Elizabeth Bennet, a young woman who learns about love, social expectations, and personal growth."
    },
    {
      "id": 2,
      "Title": "1984",
      "Author": "George Orwell",
      "image": "https://imgs.search.brave.com/Ga9l1HkhY8QiNiXwjUQPkLl75twcTHUjoi8GiuSiUH4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxZVdZUDlHNTdM/LmpwZw",
      "Genre": "Dystopian",
      "Publication_Year": 1949,
      "Rating": "4.7",
      "Downloads": 970000,
      "About_Book": "A dystopian novel set in a totalitarian regime, following Winston Smith as he attempts to rebel against the oppressive government led by Big Brother"
    },
    {
      "id": 3,
      "Title": "Pride and Prejudice",
      "image": "https://imgs.search.brave.com/cK-KGfYoAwuCZc7w2Y5tzPg5jS9tbAvKTlrFiZS8GPY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGVy/bGluZy11cy5pbWdp/eC5uZXQvY292ZXJz/Lzk3ODE0NTQ5NTQx/MTguanBnP2F1dG89/Zm9ybWF0Jmg9NjQ4",
      "Author": "Jane Austen",
      "Genre": "Romance",
      "Publication_Year": 1813,
      "Rating": "4.5",
      "Downloads": 950000,
      "About_Book": "The tale of Captain Ahab's obsessive quest to hunt down the elusive white whale, Moby Dick."
    },
    {
      "id": 4,
      "Title": "The Great Gatsby",
      "Author": "F. Scott Fitzgerald",
      "image": "https://imgs.search.brave.com/UI9Ne5mZF-ugxXymtVaYp7nyOt6xHoumOknHGEmXcX8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL3RoZV9ncmVh/dF9nYXRzYnlfa2V5/X2FydC5qcGc",
      "Genre": "Fiction",
      "Publication_Year": 1925,
      "Rating": "4.7",
      "Downloads": 980000,
      "About_Book": "A novel about the American Dream, following the life of Jay Gatsby and his obsession with Daisy Buchanan."
    },
    {
      "id": 5,
      "Title": "Moby-Dick",
      "image": "https://imgs.search.brave.com/KiLhXfShK93kv53hY3S_17XGvlNxIHEUjqTr-FHLnts/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxNWstSmVzMExT/LmpwZw",
      "Author": "Herman Melville",
      "Genre": "Adventure",
      "Publication_Year": 1851,
      "Rating": "4.8",
      "Downloads": 1000000,
      "About_Book": "A vast epic novel set during the Napoleonic Wars, focusing on the lives of Russian aristocracy and their struggle during times of war and peace."
    },
    {
      "id": 6,
      "Title": "War and Peace",
      "image": "https://imgs.search.brave.com/6PX5T1GO1W_a0zzGWHRp4d3ypoyW961mXbRb0daCa0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk0yRTBNREEz/TldRdFl6STJPUzAw/WTJVekxXRm1NamN0/TmpSbU1tTTVZVEE1/T1RSaVhrRXlYa0Zx/Y0djQC5qcGc",
      "Author": "Leo Tolstoy",
      "Genre": "Historical Fiction",
      "Publication_Year": 1869,
      "Rating": "4.6",
      "Downloads": 950000,
      "About_Book": "A novel about the troubled teenage life of Holden Caulfield, exploring themes of adolescence, identity, and loss."
    },
    {
      "id": 7,
      "Title": "The Catcher in the Rye",
      "image": "https://imgs.search.brave.com/XwLjYgVA-343q1RwnUTss2tQ1LFg4hLlL4mgNaGsAjU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFUSSt3NTZxRkwu/anBn",
      "Author": "J.D. Salinger",
      "Genre": "Fiction",
      "Publication_Year": 1951,
      "Rating": "4.5",
      "Downloads": 970000,
      "About_Book": "A trilogy about Frodo Baggins and his companions, tasked with destroying the One Ring to defeat the Dark Lord Sauron."
    },
    {
      "id": 8,
      "Title": "The Hobbit",
      "image": "https://imgs.search.brave.com/07z_bUqTWR-ViwDjpMPjFoVMdNwG33S46b0OgVAJ8_4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pcnMu/d3d3Lndhcm5lcmJy/b3MuY29tL2tleWFy/dC1qcGVnL21vdmll/cy9tZWRpYS9icm93/c2VyL3RoZV9ob2Ji/aXRfYmF0dGxlX29m/X3RoZV9maXZlX2Fy/bWllc18yMDAweDMw/MDAuanBn",
      "Author": "J.R.R. Tolkien",
      "Genre": "Fantasy",
      "Publication_Year": 1937,
      "Rating": "4.6",
      "Downloads": 970000,
      "About_Book": "An epic poem following the adventures of Odysseus as he struggles to return home after the Trojan War, encountering gods, monsters, and obstacles along the way."
    },
    {
      "id": 9,
      "Title": "The Lord of the Rings",
      "image": "https://imgs.search.brave.com/QC9H4JaeIqVbAC90Y1unnddWLxh-CvW3cd9L2jRFlHU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTF1SEsrK0lla0wu/anBn",
      "Author": "J.R.R. Tolkien",
      "Genre": "Fantasy",
      "Publication_Year": 1954,
      "Rating": "4.7",
      "Downloads": 960000,
      "About_Book": "The novel tells the story of the Joad family as they travel west during the Great Depression, seeking a better life while facing hardship, injustice, and social inequality."
    },
    {
      "id": 10,
      "Title": "The Chronicles of Narnia",
      "image": "https://imgs.search.brave.com/Ry7J-HwJPuCB9QvgZS34c5sK4CeOEweUNK6TMOLtPSc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzgxS3hrb3lyeEJM/LmpwZw",
      "Author": "C.S. Lewis",
      "Genre": "Fantasy",
      "Publication_Year": 1950,
      "Rating": "4.5",
      "Downloads": 920000,
      "About_Book": "A novel set in a dystopian future where society is engineered to create stability and happiness, but at the cost of individual freedom and identity."
    },
    {
      "id": 11,
      "Title": "Brave New World",
      "image": "https://imgs.search.brave.com/T4CvlTPj2H4UYs7VE8n6H2TUAmSNMsxKb074FzP21Wc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aHV4bGV5Lm5ldC9o/dXhsZXkyLmpwZw",
      "Author": "Aldous Huxley",
      "Genre": "Dystopian",
      "Publication_Year": 1932,
      "Rating": "4.6",
      "Downloads": 900000,
      "About_Book": "A novel that tells the tragic story of Victor Frankenstein and the monster he creates, exploring themes of isolation, ambition, and humanity."
    },
    {
      "id": 12,
      "Title": "The Picture of Dorian Gray",
      "image": "https://imgs.search.brave.com/zHnz6vIEB692O4dUj9ce6-IrxIhub181ZT7XeadYMvA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxUFQycFRlNGdM/LmpwZw",
      "Author": "Oscar Wilde",
      "Genre": "Gothic Fiction",
      "Publication_Year": 1890,
      "Rating": "4.6",
      "Downloads": 950000,
      "About_Book": "The novel tells the story of Count Dracula's attempt to move from Transylvania to England in order to spread the undead curse, focusing on the battle between Dracula and a group of people trying to stop him."
    },
    {
      "id": 13,
      "Title": "Fahrenheit 451",
      "image": "https://imgs.search.brave.com/rJTi2SvEpc3FZ2iniB43OPtnGTh6WfTsGC7-Hb4Pggs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL00v/TVY1Qk1EQTNaakl4/WTJVdE16Vm1NUzAw/TlRrd0xUbGpNemt0/TnprMlpXTXhZelpr/TkdFM1hrRXlYa0Zx/Y0djQC5qcGc",
      "Author": "Ray Bradbury",
      "Genre": "Dystopian",
      "Publication_Year": 1953,
      "Rating": "4.5",
      "Downloads": 870000,
      "About_Book": "A novel about a young man, Dorian Gray, whose portrait ages while he remains youthful and unscathed, leading to his eventual moral and physical decline."
    },
    {
      "id": 14,
      "Title": "The Alchemist",
      "image": "https://imgs.search.brave.com/VCrDtd8scfZS6_ELZ-6YL5jU-0J0xANuX72d9gvACQs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxTnBaeDZibXRM/LmpwZw",
      "Author": "Paulo Coelho",
      "Genre": "Adventure",
      "Publication_Year": 1988,
      "Rating": "4.7",
      "Downloads": 1100000,
      "About_Book": "The story of Bilbo Baggins, a hobbit who embarks on a grand adventure with a group of dwarves to reclaim their home and treasure from the dragon Smaug."
    },
    {
      "id": 15,
      "Title": "Jane Eyre",
      "image": "https://imgs.search.brave.com/XMAeml1ea3R0dH9nqbPf-EzV_Y4j-Cmh9F4mjQ38TxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzVl/ZTdjZWIzNGIxNWI0/NDYxOTA4ZThiOC8x/NjAyNzk2NzkxMzk1/LURQVkRMUURKRENW/QkJFOThQMFZML0ph/bmVfRXlyZS5qcGc",
      "Author": "Charlotte Brontë",
      "Genre": "Romance",
      "Publication_Year": 1847,
      "Rating": "4.5",
      "Downloads": 930000,
      "About_Book": "A historical novel set in London and Paris before and during the French Revolution, focusing on the themes of resurrection, sacrifice, and the impact of the revolution."
    },
    {
      "id": 16,
      "Title": "The Road",
      "image": "https://imgs.search.brave.com/Px7oeHJGY36jcF4z7S1gBcu13nQPJBCGgX1Zkca9vws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxRGFDcElDa1hM/LmpwZw",
      "Author": "Cormac McCarthy",
      "Genre": "Post-apocalyptic",
      "Publication_Year": 2006,
      "Rating": "4.6",
      "Downloads": 900000,
      "About_Book": "The novel follows the mental anguish and moral dilemmas of Rodion Raskolnikov, a former student who commits a crime and struggles with guilt and redemption."
    },
    {
      "id": 17,
      "Title": "The Outsiders",
      "image": "https://imgs.search.brave.com/5Jp_ffpEeNqnMEQy1_rpKNGb_lamcvl5lEywH9QHe1U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90YXJn/ZXQuc2NlbmU3LmNv/bS9pcy9pbWFnZS9U/YXJnZXQvR1VFU1Rf/ZDdkZDIwMTAtNDY1/YS00MGIyLWIwOWIt/OTg4MzZjNmRiOGU0/P3dpZD04MDAmaGVp/PTgwMCZxbHQ9ODAm/Zm10PXBqcGVn",
      "Author": "S.E. Hinton",
      "Genre": "Young Adult",
      "Publication_Year": 1967,
      "Rating": "4.8",
      "Downloads": 950000,
      "About_Book": "A novel about Anna Karenina, a woman trapped in a loveless marriage who embarks on a passionate affair with Count Vronsky, leading to tragic consequences."
    },
    {
      "id": 18,
      "Title": "The Shining",
      "image": "https://imgs.search.brave.com/VDAk2Lcfi3csacK1ctyXySA7ZQ2qx4sThAa094mdk_c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzcxMDBDOFVjUjZM/LmpwZw",
      "Author": "Stephen King",
      "Genre": "Horror",
      "Publication_Year": 1977,
      "Rating": "4.7",
      "Downloads": 960000,
      "About_Book": "The story revolves around the Karamazov family and the spiritual and philosophical struggles of its members, addressing themes of faith, doubt, and morality."
    },
    {
      "id": 19,
      "Title": "The Girl with the Dragon",
      "image": "https://imgs.search.brave.com/G8ywirgMQ6VrN2qKzh-f6PHXL2aEmcDpKYXTBIAfB_U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFONDdlcHZhSUwu/anBn",
      "Author": "Stieg Larsson",
      "Genre": "Mystery",
      "Publication_Year": 2005,
      "Rating": "4.5",
      "Downloads": 900000,
      "About_Book": "An epic poem that tells the journey of Dante through Hell, Purgatory, and Heaven, guided by the Roman poet Virgil and his beloved Beatrice."
    },
    {
      "id": 20,
      "Title": "The Handmaid's Tale",
      "image": "https://imgs.search.brave.com/KOFQpXnQE_hoLrjDYzZ5qnOcnaR2GTlMiK84_TbEZfk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Ym9va3RvcGlhLmNv/bS5hdS9jb3ZlcnMv/MjAwLzk3ODA1MjU0/MzUwMDYvNjQ1NS90/aGUtaGFuZG1haWQt/cy10YWxlLW1vdmll/LXRpZS1pbi0uanBn",
      "Author": "Margaret Atwood",
      "Genre": "Dystopian",
      "Publication_Year": 1985,
      "Rating": "4.6",
      "Downloads": 1050000,
      "About_Book": "The story follows Ishmael's journey aboard the whaling ship Pequod, under the obsession of Captain Ahab to capture the giant white whale, Moby-Dick."
    }
  ]
}