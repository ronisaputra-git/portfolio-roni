import { useState } from "react"

function LikeCounter() {
    const [like, setLike] = useState(0)
    function tambahLike (){
        setLike(like + 1)
    }
    function kurangiLike (){
        if (like > 0){
        setLike(like - 1)
        }
    }
    function resetLike (){
        setLike (0)
    }
    return (
        <section>
         <h2> Like : {like}</h2>
             {like > 0 ? <p>Terimakasih telah memberi like</p>
                   : <p>Belum ada yang menyukai postingan ini</p>
             }
            <button onClick={tambahLike}>
                Tambah Like
            </button>
            <button onClick={kurangiLike}>
                Kurangi Like
            </button>
            <button onClick={resetLike}>
                Reset Like
            </button>
        </section>
    )
}

export default LikeCounter