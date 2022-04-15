import { formSelectCategory } from '../constants/form';
import { useMarketplaceDispatch, useMarketplaceState } from '../store/hooks';

export const CategoryPanel = () => {
  const {
    setSelectCategoryCorner, setSelectCategoryDistribution, setSelectCategoryDollar,
    setSelectCategoryFoodCoOp, setSelectCategoryFoodPantry, setSelectCategorySupermarket
  } = useMarketplaceDispatch();
  const {
    selectCategory: {
      supermarket,
      corner_store,
      dollar_stores,
      food_pantry,
      distribution,
      food_co_op
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

  const setSelectDollarFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setSelectCategoryDollar(formSelectCategory.DOLLAR_STORES.YES);
    } else {
      setSelectCategoryDollar(formSelectCategory.DOLLAR_STORES.NO);
    }
  };

  const setSelectFoodPantryFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setSelectCategoryFoodPantry(formSelectCategory.FOOD_PANTRY.YES);
    } else {
      setSelectCategoryFoodPantry(formSelectCategory.FOOD_PANTRY.NO);
    }
  };

  const setSelectDistributionFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setSelectCategoryDistribution(formSelectCategory.DISTRIBUTION.YES);
    } else {
      setSelectCategoryDistribution(formSelectCategory.DISTRIBUTION.NO);
    }
  };

  const setSelectFoodCoOpFunction = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.checked) {
      setSelectCategoryFoodCoOp(formSelectCategory.FOOD_CO_OP.YES);
    } else {
      setSelectCategoryFoodCoOp(formSelectCategory.FOOD_CO_OP.NO);
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
                  Supermarket/big box retailer
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
                  Corner/convenience store
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
                  Dollar stores
                  <input
                    type="checkbox"
                    value={dollar_stores}
                    checked={dollar_stores === formSelectCategory.DOLLAR_STORES.YES}
                    onChange={setSelectDollarFunction}
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
              <div className="option">
                <label className="chkwrap">
                  Distribution location
                  <input
                    type="checkbox"
                    value={distribution}
                    checked={distribution === formSelectCategory.DISTRIBUTION.YES}
                    onChange={setSelectDistributionFunction}
                  />
                  <span className="checkmark ckeckmark-form" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Food co-op
                  <input
                    type="checkbox"
                    value={food_co_op}
                    checked={food_co_op === formSelectCategory.FOOD_CO_OP.YES}
                    onChange={setSelectFoodCoOpFunction}
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
