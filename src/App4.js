import React, { useEffect, useMemo, useState } from "react";

function App4(){
    const genders=['Male','Female']
    const genderObject = [
        {key:'0', value:'Male'},
        {key:'1', value:'Female'}
    ]

    const categoryList = [
        {key:'1', value:'HTML'},
        {key:'2', value:'CSS'},
        {key:'3', value:'JS'},
        {key:'4', value:'PHP'},
        {key:'5', value:'REACT'},

    ]

    const levels = [
        {key:'internship', value:'Internship'},
        {key:'junior', value:'Junior Developer'},
        {key:'senior', value:'Senior Developer'}
    ]

    const[text,setText] = useState('')
    const[description,setDescription] = useState('')
    const[gender,setGender] = useState('')
    const[categories,setCategories] = useState([])
    const[terms,setTerms] = useState(true)
    const[rules,setRules] = useState([
        {key:'1', value: 'I accept the 1. rule',checked:false },
        {key:'2', value: 'I accept the 2. rule',checked:true },
        {key:'3', value: 'I accept the 3. rule',checked:false }

    ])
    const[level,setLevel] = useState('internship')
    const[avatar,setAvatar] = useState(false)
    const[image,setImage] = useState(false)

    useEffect(()=>{
        if(avatar){
            const fileReader = new FileReader()
            fileReader.addEventListener('load',function(){
                setImage(this.result)
            })
            fileReader.readAsDataURL(avatar)
        }
    })

    const selectedGender = useMemo(() => {
        return genders[gender]
    },[gender])

    const selectedObjectGender = useMemo(() => {
        return genderObject.find(g=>g.key === gender) || null
    },[gender])

    const selectedCategories = useMemo(() => {
        return categoryList
        .filter(c => categories.includes(c.key))
        .map(c => c.value);
    }, [categories]);

    const checkRule = (key,checked) =>{
        setRules(rules => rules.map(rule => {
            if (key === rule.key){
                rule.checked = checked
            }
            return rule
        }))
    }
    
    const submitHandle = () => {
        const formData = new FormData()
        formData.append('avatar',avatar)
        formData.append('name',avatar.name)
        fetch('https://jsonplaceholder.typicode.com/posts',{
            method: 'POST',
            body: formData
        })
    }

    const enabled = rules.every(r => r.checked) && terms && avatar

    return(
        <>
            <button onClick={() => {setText('Furkan')} }>Set Text</button>
            <input type='text' value={text} onChange={e => setText(e.target.value)}></input>
            <br></br>
            {text}
            <br/>
            <textarea onChange={e => setDescription(e.target.value)}></textarea>
            <br/>
            {description} 

            <select value={gender} onChange={e => setGender(e.target.value)}>
                <option value="">Choose</option>
                {genders.map((g,index) =>(<option value={index} key={index}>{g}</option>
            ))}
            </select>
            <br></br>
            {selectedGender}

            <br></br>
            <select value={gender} onChange={e => setGender(e.target.value)}>
                <option value="">Choose</option>
                {genderObject.map(g =>(<option value={g.key} key={g.key}>{g.value}</option>
            ))}
            </select>
            <br></br>
            <pre>{JSON.stringify(selectedObjectGender,null,2)}</pre>

            <br></br>
            <button onClick={() => setCategories([1,2,3,4,5])}>Choose All categories</button>
            <select value={categories} multiple={true} onChange={e => setCategories([...e.target.selectedOptions].map(option => option.value))}>
                {categoryList.map(c =>(
                    <option value={c.key} key={c.key}>{c.value}</option>
                )
            )}
            </select>
            <br></br>
            <pre>{JSON.stringify(selectedCategories,null,2)}</pre>

            <br></br>
            <label>
                <input type="checkbox" checked={terms} onChange={e => setTerms(e.target.checked)}/>
                I Accept The Terms
            </label>
            <br></br>
            {rules.map(r => (
                <label key={r.key}>
                <input type="checkbox" checked={r.checked} onChange={e => checkRule(r.key,e.target.checked)}/>
                    {r.value}
                </label>
            ))}

            <br></br>
            <pre>{JSON.stringify(rules,null,2)}</pre>
            <br></br>
                {levels.map((l,index)=>(
                    <label key={index}>
                        <input type='radio' value={l.key} checked={l.key === level} onChange={e => setLevel(e.target.value)}></input>
                        {l.value}
                    </label>
                ))}
            <br></br>
            
            <label >
                <input type="file" onChange={e => setAvatar(e.target.files[0])}/>
                {avatar && (
                    <>
                     <h3>{avatar.name}</h3>
                     {image && <img src={image} alt="picture"></img> }
                    </>
                   
                )}
                </label>

            <br></br>
            <button onClick={submitHandle} disabled={!enabled}>Continue</button>
        </>
    )
}

export default App4