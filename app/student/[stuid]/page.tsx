export default async function Page({params}:{params:{stuid:string}}) {
    //ใช้ destructure แตกข้อมูลใน parms เพื่อเอามาใช้งาน
    const {stuid} = await params;

    return (
        <div>
            <h1>SAU Student</h1>
            <hr />
            STUDENT ID:{stuid}
            <hr />
            <h1>WOW WOW WOW</h1>
        </div>
    );
}