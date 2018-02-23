import React from 'react'; // normalement j'ai pas besoin d'importer Component vu que j'importe React

class SeriesItemLister extends React.Component {
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
            })
            .catch(function (error) {
                console.log(error);
            })
    }



    render() {
        return (
            <div>
                <h4>Liste des Series depuis /public/seriesList.json</h4>
                <ul>
                    {this.state.seriesList.length?
                        this.state.seriesList.map(item => (
                                    <li key={item.id}>{item.seriesName}</li>
                                )
                            )
                        : <li>...</li>
                    }
                </ul>

            </div>
        )
    }
}

export default SeriesItemLister;