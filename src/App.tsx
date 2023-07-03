import * as React from 'react';
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { customerData} from './dataSource';
import './App.css';

function App() {
    return (<div>
        <GridComponent data-testid="#Grid" dataSource={customerData.slice(0,5)}>
            <ColumnsDirective>
                <ColumnDirective field='CustomerID' headerText='Customer ID' width='100' />
                <ColumnDirective field='ContactName' headerText='CustomerName' width='100' textAlign="Right" />
                <ColumnDirective field='Address' headerText='Address' width='80' textAlign="Right"/>
                <ColumnDirective field='Country' headerText='Country' width='100'/>
            </ColumnsDirective>
        </GridComponent>
    </div>)
};
export default App;