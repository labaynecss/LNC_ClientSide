import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ScreenHeader from '../../components/ScreenHeader';
import { setSuccess } from '../../store/reducers/globalReducer';
import { useCreateMutation } from '../../store/services/categoryService';
import Wrapper from './Wrapper';

const CreateCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState('');
  const [saveCategory, data] = useCreateMutation();
  console.log(data);
  const errors = data?.error?.data?.errors ? data?.error?.data?.errors : [];
  const submitCategory = (e) => {
    e.preventDefault();
    saveCategory({ name: state });
  };

  useEffect(() => {
    if (data?.isSuccess) {
      dispatch(setSuccess(data?.data?.message));
      navigate('/dashboard/categories');
    }
  }, [data?.data?.message, data?.isSuccess, dispatch, navigate]);
  return (
    <Wrapper>
      <ScreenHeader>
        <Link
          to="/dashboard/categories"
          className="btn-dark inline-block py-2 px-4 rounded-md text-white text-center">
          <i className="bi bi-arrow-left-short"></i> Categories List
        </Link>
      </ScreenHeader>
      <form className="w-full md:w-8/12" onSubmit={submitCategory}>
        <h3 className="text-lg capitalize mb-3">Create Category</h3>
        {errors.length > 0 &&
          errors.map((error, key) => (
            <p className="alert-danger" key={key}>
              {error.msg}
            </p>
          ))}
        <div className="mb-3">
          <input
            type="text"
            name=""
            className="form-control"
            placeholder="Category Name..."
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value={data.isLoading ? 'loading...' : 'create category'}
            className="btn-indigo"
          />
        </div>
      </form>
    </Wrapper>
  );
};

export default CreateCategory;
