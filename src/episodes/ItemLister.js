import React from 'react'; // normalement j'ai pas besoin d'importer Component vu que j'importe React

class EpisodesItemLister extends React.Component {
    constructor() {
        super();
        this.state = {
            seriesName: '',
            seriesList: [],
            seriesEpisodesLists: []
        };
    }

    componentDidMount() {
        fetch('seriesList.json',
            {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                /*body: JSON.stringify({'yolo': 'yolo'})*/
            })
            .then(response => response.json())
            .then(seriesList => {
                this.setState({seriesList: seriesList});
                fetch('seriesEpisodesLists.json', {})
                    .then(response => response.json())
                    .then(seriesEpisodesLists => {
                        this.setState({seriesEpisodesLists: seriesEpisodesLists});
                    })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    // la en fait on feinte, en utilisant une fct flechee on conserve le bon 'this', celui de la classe :)
    handleChange = (event) => {
        this.setState({
            seriesName: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h4>Series+Episodes recherchés depuis /public/seriesEpisodesLists.json</h4>
                <input type="text" name="title" placeholder="coucou" value={this.state.seriesName}
                       onChange={this.handleChange}/>
                <ul>
                    {this.state.seriesName.length && this.state.seriesList.length && this.state.seriesEpisodesLists.length ?
                        this.state.seriesList.filter(item => item.seriesName.toLowerCase().indexOf(this.state.seriesName.toLowerCase()) !== -1)
                            .map(item => (
                                    <li key={item.id}>{item.seriesName}
                                        <ol>
                                            {this.state.seriesEpisodesLists
                                            /* la stro bien mais j'ai besoin a chaque fois que de  la liste des listes, im filter me retournerais tous ceux qui match ds un array, moi m'en fous je veux juste l'object en fait... */
                                                .reduce((list, acc) => {
                                                    return (item.id === list.serie_id ? list.episodes_list : acc.episodes_list)
                                                })
                                                .map(item => <li key={item.id}>{item.episodeName}</li>)}
                                        </ol>
                                    </li>
                                )
                            )
                        : <li>...</li>
                    }
                </ul>

            </div>
        )
    }
}

export default EpisodesItemLister;