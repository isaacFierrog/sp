export async function ajax(props){
    try{
        const { url, success } = props;
        const res = await fetch(url);

        if(!res.ok) throw { status: res.status, statusText: res.statusText }

        const json = await res.json();

        success(json);
    }catch(err){
        const message = err.statusText || 'Ocurrio un error al acceder a la API';

        document.getElementById('root').innerHTML = `
            <div class="error">
                <p>Error ${err.status}: ${message}</p>
            </div>
        `;

        console.log(err);
    }
}