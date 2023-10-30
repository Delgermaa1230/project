const product = [
    // Plays
    {
        id: 0,
        image: '/i/plays1.png',
        title: 'Fearless Play',
        price: 39,
    },
    {
        id: 1,
        image: '/i/plays2.png',
        title: 'The Red Play',
        price: 42,
    },
    {
        id: 2,
        image: '/i/plays3.png',
        title: 'Speak Now Play',
        price: 17,
    },
    // Concerts
    {
        id: 3,
        image: 'assets/greyForest.png',
        title: 'Fearless Concert',
        price: 85,
    },
    {
        id: 4,
        image: 'assets/taylorMirror.png',
        title: 'The Red Concert',
        price: 100,
    },
    {
        id: 5,
        image: '/i/birds.png',
        title: 'Speak Now Concert',
        price: 56,
    },
    // Albums
    {
        id: 6,
        image: 'assets/1989.png',
        title: '1989 Album',
        price: 34,
    },
    {
        id: 7,
        image: 'assets/taylorBlackSweater.png',
        title: 'The Reputation Album',
        price: 43,
    }, 
    {
        id: 8,
        image: 'assets/skyTaylor.png',
        title: 'The Eras Album',
        price: 55,
    }
];
const categories = [...new Set(product.map((item) => 
    {return item}))]
    let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => 
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')