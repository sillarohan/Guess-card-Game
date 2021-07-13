let cards=[
    {
        image:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80",
        value:1,
        status:"closed"
    },

    {
        image:"https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&w=1000&q=80",
        value:1,
        status:"closed"
    },

    {
        image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:2,
        status:"closed"
    },

    {
        image:"https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:2,
        status:"closed"
    },

    {
        image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:3,
        status:"closed"
    },

    {
        image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        value:3,
        status:"closed"
    },

    {
        image:"https://images.unsplash.com/photo-1580569214296-5cf2bffc5ccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        value:4,
        status:"closed"
    },

    {
        image:"https://images.unsplash.com/photo-1580569214296-5cf2bffc5ccd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        value:4,
        status:"closed"
    },

    {
        image:"https://1.bp.blogspot.com/-9z2l__m0DFY/XS4va-X3GFI/AAAAAAAADgw/PXtqes2Ecq8x042xMUJP9oDEIe-yisiiQCLcBGAs/s1600/3d8ef423bb621a87c36bbe7e63444d76.jpg",
        value:5,
        status:"closed"
    },

    {
        image:"https://1.bp.blogspot.com/-9z2l__m0DFY/XS4va-X3GFI/AAAAAAAADgw/PXtqes2Ecq8x042xMUJP9oDEIe-yisiiQCLcBGAs/s1600/3d8ef423bb621a87c36bbe7e63444d76.jpg",
        value:5,
        status:"closed"
    },
]

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;


function displayCards(data){
    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
        
           <div class="card" style="background-image:url('${card.image}')">
                <div class=" overlay ${card.status}" onclick="openCard(${index})"></div>
           </div>
        
        `;
    });

    document.getElementById('cards').innerHTML=cardsString;
}


displayCards(cards);

let cardCount=1;
let val1=null,val2=null;
let score=0;

function openCard(index){
    console.log(cards);
    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score = score + 10;
            document.getElementById('score').innerHTML=score;

            val1=null;
            val2=null;
            cardCount=1;
        }
        else {
            alert("Game Over");
            location.reload();
        }
    }

    displayCards(cards);
}