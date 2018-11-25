import {inject, observer} from "mobx-react";
import * as React from "react";
import {RootStore} from "../Lib/Stores";

@inject('store')
@observer
class PlayerInfoView extends React.Component<{
    store?: RootStore
}, {}> {
    render() {
        return <div>Player Info View</div>
    }
}

export default PlayerInfoView;
