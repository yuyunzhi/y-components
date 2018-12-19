export default function validate(data,rules){
    let errors={}
    rules.forEach(rule=>{
        let value=data[rule.key]
        if(rule.required){
            if(!value && value!==0){
                errors[rule.key]={required:'必填'}
            }
        }
    })
    return errors
}