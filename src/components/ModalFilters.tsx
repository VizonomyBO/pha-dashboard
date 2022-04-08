import { ChangeEvent } from 'react';
import { ModalFilterData, FilterType } from '../@types';
import { CATEGORIES, ACCESIBILITIES, DATASOURCES } from '../constants/categories';
import { useFilter } from '../store/hooks/custom/useFilters';

export const ModalFilters = ({ setOpenModal }: ModalFilterData) => {
  const {
    categoriesSelected,
    accesibilities,
    dataSources,
    handleChangeCategory,
    handleChangeAccesibilities,
    handleChangeDataSources
  } = useFilter();
  return (
    <div className="modalretailer">
      <div className="panel">
        <div className="head">
          <label>Choose the categories that most accurately describes the retailer.</label>
        </div>
        <div className="body">
          <div className="card">
            <div className="tcatecory">
              <label>Select Category</label>
            </div>
            <div className="group">
              {CATEGORIES.map((category: FilterType) => (
                <div className="option">
                  <label className="chkwrap">
                    {category.name}
                    <input
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeCategory(e, category)}
                      checked={categoriesSelected.indexOf(category.attrib) > -1}
                    />
                    <span className="checkmark, ckeckmark-form" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="tcatecory">
              <label>Select Accessibility</label>
            </div>
            <div className="group">
              {ACCESIBILITIES.map((accesibility: FilterType) => (
                <div className="option">
                  <label className="chkwrap">
                    {accesibility.name}
                    <input
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeAccesibilities(e, accesibility)}
                      checked={accesibilities.indexOf(accesibility.attrib) > -1}
                    />
                    <span className="checkmark, ckeckmark-form" />
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className="card">
            <div className="tcatecory">
              <label>Select Data Sources</label>
            </div>
            <div className="group">
              {DATASOURCES.map((datasource: FilterType) => (
                <div className="option">
                  <label className="chkwrap">
                    {datasource.name}
                    <input
                      type="checkbox"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => handleChangeDataSources(e, datasource)}
                      checked={dataSources.indexOf(datasource.attrib) > -1}
                    />
                    <span className="checkmark, ckeckmark-form" />
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="foot">
          <button type="button" className="light" onClick={() => setOpenModal(false)}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
