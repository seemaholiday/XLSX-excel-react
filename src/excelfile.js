import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

export const ExportToExcel = ({productDetail, user, finalDataDetail}) => {
    const fileType = "xlsx"
    const exportToCSV = () => {
        finalDataDetail.map((item, index)=> {
            // console.log("item", item)
             item['json'] = XLSX.utils.json_to_sheet(item.data);
        })
        const obj = {
            Sheets:{},
            SheetNames:[]
        }
        finalDataDetail.map((item, key)=> {
           return( obj.Sheets[item.category] = item.json,
           obj.SheetNames.push(item.category))
        })
        console.log("obj", obj)
        const test = {...obj}
        const excelBuffer = XLSX.write(test, {bookType:"xlsx", type:"array"});
        const data = new Blob([excelBuffer], {type:fileType});
        FileSaver.saveAs(data, "myfile"+".xlsx")

    //    const product1 = XLSX.utils.json_to_sheet(productDetail);
    //    const user1 = XLSX.utils.json_to_sheet(user);
    //    const wb = {Sheets:{product:product1, user:user1}, SheetNames:["product", "user"]};
    //    const excelBuffer = XLSX.write(wb, {bookType:"xlsx", type:"array"});
    //    const data = new Blob([excelBuffer], {type:fileType});
    //    FileSaver.saveAs(data, "myfile"+".xlsx")
       
    }

    return(
        <button onClick={exportToCSV}>Download File</button>
    )
}