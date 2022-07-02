import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import ReactSelect from 'react-select';


const Signup = () => {

    const { register, handleSubmit, formState: { errors },control,watch} = useForm();
    const confirmPwd = watch(["password","confirmPwd"]);

    function validatePwd(){
      return confirmPwd[0] === confirmPwd[1]? true: false
    }

    const onSubmit = (data) => {
        console.log("data", data);
    };
    const selectOptions = [
        {
          value: 1,
          label: 'Football',
        },
        {
          value: 2,
          label: 'Swimming',
        },
        {
          value: 3,
          label: 'Music',
        },
        {
          value: 4,
          label: 'Art',
        },
      ];
    console.log('errors', errors);

    return (
        <div className='d-flex justify-content-center align-items-center flex-column'>
            <h2 className='my-5'>Create a new account</h2>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='email-wrapper'>
                    <input class="form-control" placeholder='email' type="text" {...register('email', { required: true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ })} />
                    {
                        (errors.email && errors.email.type === "required")
                        &&
                        <p className='text-danger my-2'>Emial Is Required</p>
                    }
                    {
                        (errors.email && errors.email.type === "pattern")
                        &&
                        <p className='text-danger my-2'>Emial Is Wrong</p>
                    }
                </div>
                <div className="gender-wrapper my-5 ">
                    <select class="form-select form-control" aria-label="Default select example">
                        <option selected>Ginder</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        
                    </select>
                </div>
                <div className='my-5 input-group'>
                <Controller className='w-100' name="selecthobbies" 
                    control={control}
                    render={({ field }) => <ReactSelect 
                    {...field} 
                    options={selectOptions} 
                    isMulti
                    isSearchable
                    placeholder='Select hobbies'
        />}
      />

                </div>
                <div className='phone-wrapper my-5 '>
                    <input class="form-control" placeholder='Phone' type='number' {...register('phone', {required: true,maxLength: 11,})}/>

                    {
                        (errors.phone && errors.phone.type === "required")
                        &&
                        <p className='text-danger my-2'>phone Is Required</p>
                    }

                    {errors.phone && errors.phone.type === 'maxLength' && (
                        <p className='text-danger my-2'>Phone max length is 11</p>
                    )}
                </div>
                <div className='password-wrapper my-5'>
                    <input class="form-control" placeholder='password' type="password" {...register('password',
                    { 
                        required: true,
                        pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/})
                    } />
                    {errors.password && errors.password.type === 'required' && (
                        <p className='text-danger my-2'>Password is required</p>
                    )}
                    {errors.password && errors.password.type === 'pattern' && (
                        <p className='text-danger my-2'>Password not valid</p>
                    )}
                </div>
                <div className='confirmedpassword-wrapper input-group my-5'>
                    <input
                    className="form-control"
                    placeholder='Confirm Password'
                    type='password'
                    {...register('confirmPwd',{validate: validatePwd})}
                    />
                    {
                        errors.confirmPwd && errors.confirmPwd.type === 'validate' && 
                        (<p className='text-danger my-2'>Password is not match</p>)
                    }
                </div>
                <div className='submit-wrapper my-5 d-flex justify-content-center'>
                    <button className='btn btn-primary btn-lg'>Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Signup