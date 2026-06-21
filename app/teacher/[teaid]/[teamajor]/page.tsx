export default async function Page({params}:{params:{teaid:string, teamajor:string}}) {
    //ใช้ destructure แตกข้อมูลใน parms เพื่อเอามาใช้งาน
    const {teaid, teamajor} = await params;

    return (
        <div>
            <h1>SAU Teacher</h1>
            <hr />
            TeacherID:{teaid}
            <br />
            Teacher Major: {teamajor}
            <hr />
            <h1>WOW WOW WOW</h1>
        </div>
    );
}