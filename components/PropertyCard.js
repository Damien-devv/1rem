export default function PropertyCard({ property }) {
  return (
    <div className='propertyCard'>
      <img src={property.image} alt={property.title} className='propertyImage' />
      <div className='propertyDetails'>
        <h3 className='propertyTitle'>{property.title}</h3>
        <p className='propertyPrice'>{property.price}</p>
        <p className='propertyLocation'>{property.location}</p>
        <div className='propertyFeatures'>
          <span>{property.bedrooms} BR</span>
          <span>{property.bathrooms} BA</span>
          <span>{property.size}</span>
        </div>
      </div>
    </div>
  );
}
