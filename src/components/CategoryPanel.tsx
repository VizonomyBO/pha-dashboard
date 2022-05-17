import { formSelectCategory } from '../constants/form';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks';

export const CategoryPanel = () => {
  const {
    setSelectCategoryCorner, setSelectCategoryFoodPantry, setSelectCategorySupermarket
  } = useMarketplaceDispatch();
  const {
    selectCategory: {
      supermarket,
      corner_store,
      food_pantry,
    }
  } = useMarketplaceState();

  const setSelectSupermaketFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setSelectCategorySupermarket(formSelectCategory.SUPERMARKET.YES);
    } else {
      setSelectCategorySupermarket(formSelectCategory.SUPERMARKET.NO);
    }
  };

  const setSelectCornerFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setSelectCategoryCorner(formSelectCategory.CORNER_STORE.YES);
    } else {
      setSelectCategoryCorner(formSelectCategory.CORNER_STORE.NO);
    }
  };

  const setSelectFoodPantryFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setSelectCategoryFoodPantry(formSelectCategory.FOOD_PANTRY.YES);
    } else {
      setSelectCategoryFoodPantry(formSelectCategory.FOOD_PANTRY.NO);
    }
  };

  return (
    <>
      <div className="sectiontitle">
        Select Category
        <sup>*</sup>
      </div>
      <div className="panel">
        <div className="body">
          <div className="card">
            <div className="group">
              <div className="option step">
                <label>
                  Choose the categories that most accurately describes the retailer.
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Food Retailer
                  <input
                    type="checkbox"
                    value={supermarket}
                    checked={supermarket === formSelectCategory.SUPERMARKET.YES}
                    onChange={setSelectSupermaketFunction}
                  />
                  <span className="checkmark ckeckmark-form" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Farmers Market
                  <input
                    type="checkbox"
                    value={corner_store}
                    checked={corner_store === formSelectCategory.CORNER_STORE.YES}
                    onChange={setSelectCornerFunction}
                  />
                  <span className="checkmark ckeckmark-form" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Food pantry
                  <input
                    type="checkbox"
                    value={food_pantry}
                    checked={food_pantry === formSelectCategory.FOOD_PANTRY.YES}
                    onChange={setSelectFoodPantryFunction}
                  />
                  <span className="checkmark ckeckmark-form" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
