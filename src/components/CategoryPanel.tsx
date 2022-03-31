import { useEffect } from 'react';
import { formSelectCategory } from '../constants/form';
import { useMarketplaceDispatch } from '../store/hooks';

export const CategoryPanel = () => {
  const {
    setSelectCategoryCorner, setSelectCategoryDistribution, setSelectCategoryDollar,
    setSelectCategoryFoodCoOp, setSelectCategoryFoodPantry, setSelectCategorySupermarket
  } = useMarketplaceDispatch();

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

  useEffect(() => {
    setSelectCategorySupermarket(formSelectCategory.SUPERMARKET.NO);
    setSelectCategoryCorner(formSelectCategory.CORNER_STORE.NO);
    setSelectCategoryDollar(formSelectCategory.DOLLAR_STORES.NO);
    setSelectCategoryFoodPantry(formSelectCategory.FOOD_PANTRY.NO);
    setSelectCategoryDistribution(formSelectCategory.DISTRIBUTION.NO);
    setSelectCategoryFoodCoOp(formSelectCategory.FOOD_CO_OP.NO);
  }, [
    setSelectCategorySupermarket, setSelectCategoryCorner, setSelectCategoryDollar,
    setSelectCategoryFoodPantry, setSelectCategoryDistribution, setSelectCategoryFoodCoOp
  ]);

  return (
    <>
      <div className="sectiontitle">
        Select Category
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
                    onChange={setSelectSupermaketFunction}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Corner/convenience store
                  <input
                    type="checkbox"
                    onChange={setSelectCornerFunction}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Dollar stores
                  <input
                    type="checkbox"
                    onChange={setSelectDollarFunction}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Food pantry
                  <input
                    type="checkbox"
                    onChange={setSelectFoodPantryFunction}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Distribution location
                  <input
                    type="checkbox"
                    onChange={setSelectDistributionFunction}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="option">
                <label className="chkwrap">
                  Food co-op
                  <input
                    type="checkbox"
                    onChange={setSelectFoodCoOpFunction}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
